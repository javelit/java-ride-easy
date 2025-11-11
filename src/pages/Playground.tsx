import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import helloCode from '@/assets/apps/playground/HelloApp.java?raw';
import chartsCode from '@/assets/apps/playground/ChartsApp.java?raw';
import counterCode from '@/assets/apps/playground/CounterApp.java?raw';
import llmCode from '@/assets/apps/playground/LlmApp.java?raw';

const Playground = () => {
  // Loading state for iframes
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const apps = [
    {
      name: "Hello",
      file: "HelloApp.java",
      url: "https://jbang-xj8u-production.up.railway.app/",
      code: helloCode
    },
    {
      name: "Charts",
      file: "ChartsApp.java",
      url: "https://jbang-qjrx-production.up.railway.app/",
      code: chartsCode
    },
    {
      name: "Counter",
      file: "CounterApp.java",
      url: "https://jbang-jtid-production.up.railway.app/",
      code: counterCode
    },
    {
      name: "LLM chat",
      file: "LlmApp.java",
      url: "https://jbang-hxpo-production.up.railway.app/",
      code: llmCode
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
            <h1 className="whitespace-pre-line text-center mt-4 text-gray-90 mb-10 col-start-1 col-end-13 sm:col-start-1 sm:col-end-13 xl:col-start-3 xl:col-end-11 text-5xl sm:text-7xl md:text-6xl md:leading-none font-bold">
                Playground</h1>
          <p className="text-xl text-muted-foreground mb-8 text-center">
            Try out different Javelit apps and look at the corresponding code right in your browser.<br/>
            To write your own app, install the <Link to={"https://docs.javelit.io/get-started/installation"} className="text-primary font-bold">Java library</Link>.
          </p>

          <Tabs defaultValue={apps[0].name.toLowerCase()} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {apps.map((app) => (
                <TabsTrigger key={app.name} value={app.name.toLowerCase()}>
                  {app.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {apps.map((app) => (
              <TabsContent key={app.name} value={app.name.toLowerCase()}>
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left: Code */}
                  <div className="relative">
                    <div className="bg-[hsl(var(--code-bg))] p-6 rounded-xl shadow-soft overflow-auto" style={{ height: '46rem' }}>
                      <SyntaxHighlighter
                        language="java"
                        style={oneDark}
                        customStyle={{
                          background: 'transparent',
                          padding: 0,
                          margin: 0,
                          fontSize: 'inherit',
                          height: '100%',
                        }}
                        codeTagProps={{
                          style: {
                            fontSize: 'inherit',
                            fontFamily: 'inherit',
                          }
                        }}
                        className="text-xs"
                      >
                        {app.code}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  {/* Right: Iframe */}
                  <div className="relative">
                    {/* Loading overlay */}
                    {loadingStates[app.name] !== false && (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-xl z-10">
                        <div className="text-center">
                          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
                          <p className="text-muted-foreground">Loading {app.name} app...</p>
                        </div>
                      </div>
                    )}

                    <iframe
                      src={`${app.url}?embed=true`}
                      allow="camera;microphone;clipboard-read;clipboard-write;"
                      className="w-full rounded-xl shadow-soft border-0 outline-none"
                      style={{ height: '46rem' }}
                      onLoad={() => setLoadingStates(prev => ({...prev, [app.name]: false}))}
                    ></iframe>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
