import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import SplashScreen from "@/components/SplashScreen";
// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Pages
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import MoringaDetail from '@/pages/MoringaDetail';
import About from '@/pages/About';
import Faq from '@/pages/Faq';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/products/moringa-powder" component={MoringaDetail} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SplashScreen />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
