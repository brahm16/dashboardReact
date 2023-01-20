import {ColorModeContext,useMode} from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

import Line from "./scenes/line";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Team from "./scenes/team";
import Geo from "./scenes/geo";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/Calendar";
import {Route, Routes} from "react-router-dom";

function App() {
  const [theme,colorMode]=useMode();
  return (
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        {/* Css reinitialiser par default */}
        <CssBaseline />
        <div className="app">
            <Sidebar />
            <main className="content">
                <Topbar />
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/form' element={<Form />} />
                    <Route path='/geo' element={<Geo />} />
                    <Route path='/pie' element={<Pie />} />
                    <Route path='/line' element={<Line />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/invoices' element={<Invoices />} />
                    <Route path='/bar' element={<Bar />} />
                    <Route path='/calendar' element={<Calendar />} />

                </Routes>
            </main>

        </div>
    </ThemeProvider>
   </ColorModeContext.Provider>
  );
}

export default App;
