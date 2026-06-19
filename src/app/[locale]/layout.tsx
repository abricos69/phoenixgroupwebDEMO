import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import '@/app/globals.css'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { DEFAULT_THEME, THEME_COOKIE } from '@/config/theme'
import { SITE } from '@/config/site'
import { routing } from '@/i18n/routing'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans',
	display: 'swap'
})

interface LayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
	params
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'meta' })

	return {
		metadataBase: new URL(SITE.url),
		title: t('homeTitle'),
		description: t('homeDescription'),
		// Демо: закрыто от индексации (снять на боевом запуске).
		robots: { index: false, follow: false },
		openGraph: {
			title: t('homeTitle'),
			description: t('homeDescription'),
			type: 'website'
		}
	}
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) notFound()
	setRequestLocale(locale)

	const cookieStore = await cookies()
	const isDark =
		(cookieStore.get(THEME_COOKIE)?.value ?? DEFAULT_THEME) === 'dark'

	return (
		<html
			lang={locale}
			className={isDark ? 'dark' : undefined}
			style={{ colorScheme: isDark ? 'dark' : 'light' }}
			suppressHydrationWarning
		>
			<body
				className={inter.variable}
				suppressHydrationWarning
			>
				<NextIntlClientProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
