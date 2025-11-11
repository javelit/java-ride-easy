///usr/bin/env jbang "$0" "$@" ; exit $?

//DEPS io.javelit:javelit:0.67.0

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import io.javelit.core.Jt;
import io.javelit.core.JtComponent;
import io.javelit.core.JtContainer;

/**
 * LLM Chat Demo - Javelit version of Streamlit's chat demo
 * This demonstrates chat functionality without actually connecting to an LLM
 */
public class LlmApp {

    private static final Random RANDOM = new Random();

    public static void main(String[] args) throws InterruptedException {
        Jt.markdown("Javelit loves LLMs! 🤖 [Build your own chat app](https://docs.javelit.io/get-started/tutorials/create-a-multipage-app) in minutes, then make it powerful by adding images, dataframes, or even input widgets to the chat.").use();

        Jt.markdown("_Note that this demo app isn't actually connected to any LLMs. Those are expensive_ \uD83D\uDE09").use();

        // Initialize chat history
        List<Message> messages = (List<Message>) Jt
                .sessionState()
                .computeIfAbsent("messages", k ->
                        new ArrayList<>(List.of(
                                new Message("assistant", "Let's start chatting! 👇"))));

        // Display chat messages from history
        var messagesContainer = Jt.container().use();
        for (Message message : messages) {
            // display message
            message.use(messagesContainer);
        }

        // Accept user input
        String prompt = Jt
                .textInput("What is up?")
                .labelVisibility(JtComponent.LabelVisibility.COLLAPSED)
                .placeholder("What is up?")
                .use();

        if (prompt != null && !prompt.trim().isEmpty()) {
            // Add user message to chat history
            Message userMsg = new Message("user", prompt);
            messages.add(userMsg);
            // display new message
            userMsg.use(messagesContainer);

            // Display assistant response with typing animation
            var messageHolder = Jt.empty().use(messagesContainer);

            String fullResponse = getRandomResponse();

            // Simulate stream of response with milliseconds delay
            String[] words = fullResponse.split(" ");
            StringBuilder partial = new StringBuilder();
            for (String word : words) {
                partial.append(word).append(" ");
                Thread.sleep(50);
                // Add a blinking cursor to simulate typing
                Jt.markdown("**Assistant:** " + partial + "▌").use(messageHolder);
            }
            // Final message without cursor
            Jt.markdown("**Assistant:** " + fullResponse).use(messageHolder);

            // Add assistant response to chat history
            messages.add(new Message("assistant", fullResponse));
        }
    }

    private static String getRandomResponse() {
        String[] responses = {
                "Hello there! How can I assist you today?",
                "Hi, human! Is there anything I can help you with?",
                "Do you need help?"
        };
        return responses[RANDOM.nextInt(responses.length)];
    }

    /**
     * Message record for chat messages
     */
    public record Message(String role, String content) {
        // Used to avoid collisions if the same message appears twice
        static int messageCounter = 0;

        public void use(JtContainer container) {
            var key = "message_" + messageCounter++;
            if ("user".equals(role)) {
                Jt.markdown("**You:** " + content).key(key).use(container);
            } else {
                Jt.markdown("**Assistant:** " + content).key(key).use(container);
            }
        }
    }
}

