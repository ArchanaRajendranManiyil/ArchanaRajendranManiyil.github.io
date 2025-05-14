# color_of_the_news.R
library(ggplot2)
library(dplyr)

# Simulate data
news_data <- data.frame(
  Source = rep(c("BBC", "CNN", "Reuters", "Al Jazeera", "Fox News"), each = 20),
  Sentiment = rnorm(100, mean = 0, sd = 1)
)

# Plot
ggplot(news_data, aes(x = Source, y = Sentiment, fill = Source)) +
  geom_boxplot() +
  theme_minimal() +
  labs(title = "Sentiment Across Global News Sources", y = "Sentiment Score", x = "News Source")
