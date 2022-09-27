import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./app";
import { QueryClient, QueryClientProvider } from "react-query";
import DogService from "./service/dog_service";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const dogService: DogService = new DogService();

root.render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App dogService={dogService} />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);
