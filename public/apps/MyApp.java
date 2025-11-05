import io.javelit.core.Jt;

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
}
