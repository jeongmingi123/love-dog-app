import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import DogService from "./service/dog_service";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";

import App from "./app";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const dogService = new DogService();

root.render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App dogService={dogService} />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);
