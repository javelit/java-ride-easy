///usr/bin/env jbang "$0" "$@" ; exit $?

//DEPS io.javelit:javelit:0.67.0

import io.javelit.core.Jt;

public class HelloApp {
  public static void main(String[] args) {
    Jt.title("Hello Javelit-er \uD83D\uDEA1").use();
    Jt.markdown(
        """ 
        This is a playground for you to try Javelit apps and have fun.
      
        **There's so much you can build!**
        
        We prepared a few examples for you to get started. Just
        click on the buttons above and discover what you can do
        with Javelit.
        """
    ).use();

    if (Jt.button("Say something!").use()) {
      Jt.subheader("Javelit is cool \uD83D\uDE0E").use();
    }
  }
}
