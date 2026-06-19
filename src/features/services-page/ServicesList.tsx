import { Container } from '@/components/ui/Container';
import { SERVICES } from '@/config/services';
import { ServiceDetail } from '@/features/services-page/ServiceDetail';

export function ServicesList() {
  return (
    <Container className="flex flex-col gap-20 py-20 sm:gap-28 sm:py-28">
      {SERVICES.map((service, index) => (
        <ServiceDetail
          key={service.key}
          serviceKey={service.key}
          icon={service.icon}
          image={service.image}
          index={index}
        />
      ))}
    </Container>
  );
}
