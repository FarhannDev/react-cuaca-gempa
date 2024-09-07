interface MenuItem {
  name: string;
  links: string;
}

interface Provinces {
  value: string;
  label: string;
}

interface ProvinceOption {
  value: string;
  label: string;
}

interface CityOption {
  value: string;
  label: string;
  province: string;
}
