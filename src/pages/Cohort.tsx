import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";

const Cohort = () => {
  return (
    <>
      <Helmet>
        <title>Cohort - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Join our coding cohort and learn with a community of developers." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 container px-4">
          <h1 className="text-4xl font-bold mb-4">Cohort</h1>
          <p className="text-muted-foreground">Content coming soon...</p>
        </main>
      </div>
    </>
  );
};

export default Cohort;
