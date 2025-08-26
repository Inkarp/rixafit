import AboutUs from "./pages/Home/AboutUs";
import Benefits from "./pages/Home/Benifits";
import Classes from "./pages/Home/Classes";
import Gallery from "./pages/Home/Gallery";
import Hero from "./pages/Home/Hero";
import Plans from "./pages/Home/Plans";
import Services from "./pages/Home/Services";
import WeAreDifferent from "./pages/Home/WeAreDifferent";
import WeeklyClassesNew from "./pages/Home/WeeklyClassesNew";
import WeeklyPrograms from "./pages/Home/WeeklyPrograms";
import WhatMakesUsDifferent from "./pages/Home/WhatMakesUsDifferent";
import WorkoutClasses from "./pages/Home/WorkoutCards";

export default function Home() {
    return <>
    <Hero />
    <Plans />
    <Services />
    <WeAreDifferent />
    <AboutUs />
    <Gallery />
    <WorkoutClasses />
    <WhatMakesUsDifferent />
   <WeeklyPrograms />
   <Benefits />
   <Classes />
   <WeeklyClassesNew />
    </>;
    }

