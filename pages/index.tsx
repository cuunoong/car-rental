import Card from "../components/card";
import Layout from "../components/layout";
import StatisticCard from "../components/statistic-card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Hired", "Canceled", "Pending"],
  datasets: [
    {
      label: "Total",
      data: [54, 20, 26],
      backgroundColor: ["#006AFF", "#52C93F", "#FF2727"],
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      {/* Todays Statistic */}
      <div className="flex w-80 flex-col space-y-4 overflow-y-auto bg-gray-04 px-7 py-8">
        {/* Headline */}
        <div>
          <h2 className="text-gray-01">Todays Statistics</h2>
          <span className="h5 text-gray-03">
            {new Date().toLocaleString("id-ID", {
              weekday: "long",
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>

        {/* Income */}
        <StatisticCard
          title="Income"
          date="Today"
          amount={9460.0}
          percentage={-1.5}
          comparedText="Compared to $9940 yesterday"
          lasetWeekText="Last week $25658.00"
        />

        {/* Expanses */}
        <StatisticCard
          title="Expanses"
          date="Today"
          amount={5660.0}
          percentage={2.5}
          comparedText="Compared to $5240 yesterday"
          lasetWeekText="Last week $25658.00"
        />

        <Card>
          <div className="flex flex-col space-y-[30px]">
            {/* Header */}
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-gray-02">Hire vs Cancel</h3>
              <span className="p5 rounded-sm bg-[#F4F5F7] px-2 py-1 text-gray-02">
                Today
              </span>
            </div>

            <div>
              <Doughnut
                data={data}
                options={{ cutout: "80%" }}
                className="mb-6"
              />
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center">
                  <span className="h-4 w-4 flex-none rounded-full bg-primary"></span>
                  <p className="ml-3 mr-6 flex-1">Total Hired</p>
                  <p>
                    54% <span className="text-green">↑</span>
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="h-4 w-4 flex-none rounded-full bg-secondary"></span>
                  <p className="ml-3 mr-6 flex-1">Total Canceled</p>
                  <p>
                    20% <span className="text-secondary">↓</span>
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="h-4 w-4 flex-none rounded-full bg-green"></span>
                  <p className="ml-3 mr-6 flex-1">Total Pending</p>
                  <p>
                    26% <span className="text-secondary">↓</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex-1 bg-white">C</div>
    </Layout>
  );
}
