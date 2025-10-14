import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';

const CodeExample = () => {
  const codeString = `import io.jeamlit.core.Jt;

public class MyApp {
  public static void main(String[] args) {
    double temp = Jt.slider(
                    "Temperature °C").use();

    if (temp > 30) {
      Jt.markdown("🔥 **Too Hot!**").use();
    } else if (temp < 10) {
      Jt.markdown("❄️ **Too Cold!**").use();
    } else {
      Jt.text("✅ Perfect!").use();
    }
  }
}`;

  return (
    <section className="pb-16 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Principles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamlit-inspired simplicity, now in Java.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code block */}
          <div className="relative -mx-4 sm:-mx-6 lg:mx-0">
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="bg-[hsl(var(--code-bg))] p-3 sm:p-6 pt-6 sm:pt-12 rounded-xl shadow-soft overflow-hidden">
              <SyntaxHighlighter
                language="java"
                style={oneDark}
                customStyle={{
                  background: 'transparent',
                  padding: 0,
                  margin: 0,
                  fontSize: 'inherit',
                  overflow: 'hidden',
                }}
                codeTagProps={{
                  style: {
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }
                }}
                className="text-[10px] xs:text-xs sm:text-sm leading-tight"
                wrapLines={true}
                wrapLongLines={true}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">As simple as a script</h3>
                <p className="text-xl text-muted-foreground">Break free from boilerplate. Your app is just your logic, running top-to-bottom. See changes instantly with live reloading.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactions made easy</h3>
                <p className="text-xl text-muted-foreground">Use a widget: it returns its current value. <br/>HTML, CSS, Javascript, event handling, routes, requests? Gone.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible deployment</h3>
                <p className="text-xl text-muted-foreground">Run Jeamlit apps standalone or embed them into Spring, Quarkus, or any Java stack.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo GIF */}
        <div className="mt-12 flex justify-center">
          <img
            src="/demo_code.gif"
            alt="Demo of the app in action"
            className="rounded-lg shadow-soft max-w-full lg:max-w-2xl"
          />
        </div>

        {/* Get Started CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to build?
          </h3>
          <Button 
            asChild
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
          >
            <a href="https://docs.jeamlit.io" target="_blank">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
