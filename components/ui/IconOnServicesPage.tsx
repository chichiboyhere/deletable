import {
  ShieldCheck,
  UserCheck,
  Users,
  Car,
  Warehouse,
  Building2,
  MapPin,
} from "lucide-react";

const getIcon = (slug: string) => {
  if (slug.includes("bodyguard") || slug.includes("vip"))
    return <UserCheck size={30} color="#FFBF00" />;
  if (
    slug.includes("event") ||
    slug.includes("wedding") ||
    slug.includes("concert")
  )
    return <Users size={30} color="#FFBF00" />;
  if (
    slug.includes("car-rental") ||
    slug.includes("pickup") ||
    slug.includes("escort")
  )
    return <Car size={30} color="#FFBF00" />;
  if (slug.includes("industrial") || slug.includes("warehouse"))
    return <Warehouse size={30} color="#FFBF00" />;
  if (slug.includes("corporate") || slug.includes("victoria-island"))
    return <Building2 size={30} color="#FFBF00" />;
  if (slug.includes("ikeja") || slug.includes("lekki") || slug.includes("ajah"))
    return <MapPin size={30} color="#FFBF00" />;
  return <ShieldCheck size={30} color="#FFBF00" />; // Default
};

export default getIcon;
