import Loadable from 'react-loadable';

const MyComponent = (() => {
  const Heading = Loadable({
    loading: () => null,
    loader: () => import('./shared/Heading').then((module) => module.default),
  });
  const TopNavigation = Loadable({
    loading: () => null,
    loader: () =>
      import('./shared/navbar/TopNavigation').then((module) => module.default),
  });

  const SearchEmpty = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/search/SearchEmpty').then((module) => module.default),
  });
  const WeatherDetailWtContainer = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/weather/WeatherDetailWtContainer').then(
        (module) => module.default
      ),
  });
  const WeatherSelected = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/weather/WeatherSelected').then((module) => module.default),
  });
  const WeatherItem = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/weather/WeatherItem').then((module) => module.default),
  });
  const QuakeItemList = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/quake/QuakeItemList').then((module) => module.default),
  });
  const QuakeShakeMapImage = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/quake/QuakeItemShakemap').then((module) => module.default),
  });
  const QuakeItemContent = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/quake/QuakeItemContent').then((module) => module.default),
  });
  const QuakeItemHeading = Loadable({
    loading: () => null,
    loader: () =>
      import('./ui/quake/QuakeItemHeading').then((module) => module.default),
  });

  return {
    Heading,
    TopNavigation,
    SearchEmpty,
    WeatherDetailWtContainer,
    WeatherSelected,
    WeatherItem,
    QuakeItemList,
    QuakeShakeMapImage,
    QuakeItemContent,
    QuakeItemHeading,
  };
})();

export default MyComponent;
