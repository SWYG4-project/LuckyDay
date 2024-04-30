import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Router from "router/Router";
import { Layout } from "components";
import { theme } from "styles/themes/theme";
import "./fonts/fonts.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.locale("ko");

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
          <Layout />
          {/* Fix : 레이아웃 수정 예정 */}
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
