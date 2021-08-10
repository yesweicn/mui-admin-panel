import { FeatureInfo, Chart,WidgetSm,WidgetLg } from '../../components';
import { userData } from "../../dummyData";
import './Home.css';
function Home() {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
};
export default Home;