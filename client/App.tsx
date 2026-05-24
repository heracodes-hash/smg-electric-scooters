import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import PartsList from "./pages/PartsList";
import Requests from "./pages/Requests";
import RequestForm from "./pages/RequestForm";
import Documents from "./pages/Documents";
import Policies from "./pages/Policies";
import Facilities from "./pages/Facilities";
import Profile from "./pages/Profile";
import PDI from "./pages/PDI";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Login Route */}
            <Route path="/" element={<Login />} />

            {/* Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <MainLayout>
                  <Index />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/parts"
              element={
                <MainLayout>
                  <PartsList />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/requests"
              element={
                <MainLayout>
                  <Requests />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/request"
              element={
                <MainLayout>
                  <RequestForm />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/documents"
              element={
                <MainLayout>
                  <Documents />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/policies"
              element={
                <MainLayout>
                  <Policies />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/facilities"
              element={
                <MainLayout>
                  <Facilities />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <MainLayout>
                  <Profile />
                </MainLayout>
              }
            />
            <Route
              path="/dashboard/pdi"
              element={
                <MainLayout>
                  <PDI />
                </MainLayout>
              }
            />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
