///usr/bin/env jbang "$0" "$@" ; exit $?

//DEPS io.javelit:javelit:0.67.0

import io.javelit.core.Jt;

public class CounterApp {

  public static void main(String[] args) {
    Jt.markdown("""
                Use `Jt.sessionState()` to maintain states. \s
                """
    ).use();

    if (Jt.button("Click me").use()) {
      Jt.sessionState().computeInt("count", (k, v) -> v + 1);
    }

    int count = Jt.sessionState().computeIfAbsentInt("count", k -> 0);
    Jt.markdown("Count of button clicks: **%s**".formatted(count)).use();
  }
}
