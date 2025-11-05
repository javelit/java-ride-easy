import io.javelit.core.Jt;

public class MyApp {
    public static void main(String[] args) {
      double temp = Jt.slider("Temperature °C")
                      .max(55)
                      .use();

      if (temp > 30) {
        Jt.error("🔥 **Too Hot!**").use();
      } else if (temp < 10) {
        Jt.info("❄️ **Too Cold!**").use();
      } else {
        Jt.success("✅ Perfect!").use();
      }
    }
}
