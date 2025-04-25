<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{ title }} – Best Dubai</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <article>
    <h1>{{ title }}</h1>
    <img src="{{ image }}" alt="{{ title }}" style="max-width:100%;height:auto;" />
    <p><strong>📍 Location:</strong> {{ location }}</p>
    <p><strong>💸 Price:</strong> {{ price }}</p>
    <p><strong>🔓 Status:</strong> {{ status }}</p>
    <p><strong>🏷️ Tags:</strong> {{ tags | join(', ') }}</p>
    <p><strong>⭐ Rating:</strong> {{ rating }}</p>

    <hr />
    {{ content | safe }}
  </article>
</body>
</html>