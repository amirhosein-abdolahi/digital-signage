export default function Date() {
  const dates = {
    shamsi: {
      month: "فروردین",
      day: "16",
    },
    miladi: {
      month: "January",
      day: "23",
    },
    gamari: {
      month: "صفر",
      day: "12",
    },
  };

  const times = {
    fajr: "04:06",
    sunrise: "05:34",
    dhuhr: "12:05",
    sunset: "18:35",
    maghrib: "18:54",
    midnight: "23:21",
  };

  return (
    <div
      dir="rtl"
      className="flex h-full px-5 py-4 text-nowrap bg-secondary-1/80 text-natural-700 rounded-xl"
    >
      <div className="flex pl-5 flex-col justify-around text-xl border-l-2 border-natural-700/50">
        <h1 className="text-3xl">{`${dates.shamsi.day} ${dates.shamsi.month}`}</h1>
        <h1>{`${dates.gamari.day} ${dates.gamari.month}`}</h1>
        <h1
          dir="ltr"
          className="text-left"
        >{`${dates.miladi.day} ${dates.miladi.month}`}</h1>
      </div>
      <div className="flex flex-col justify-around items-center w-full">
        <div className="flex items-center *:px-3 *:text-center">
          <div className="border-l-2 border-natural-700/50">
            <h1>اذان صبح</h1>
            <h1>{times.fajr}</h1>
          </div>
          <div className="border-l-2 border-natural-700/50">
            <h1>طلوع آفتاب</h1>
            <h1>{times.sunrise}</h1>
          </div>
          <div>
            <h1>اذان ظهر</h1>
            <h1>{times.dhuhr}</h1>
          </div>
        </div>
        <div className="flex items-center *:px-2 *:text-center">
          <div className="border-l-2 border-natural-700/50">
            <h1>غروب آفتاب</h1>
            <h1>{times.sunset}</h1>
          </div>
          <div className="border-l-2 border-natural-700/50">
            <h1>اذان مغرب</h1>
            <h1>{times.maghrib}</h1>
          </div>
          <div>
            <h1>نیمه شب</h1>
            <h1>{times.midnight}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
