<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Loading Screen</title>
<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .hidden {
    display: none;
  }
</style>
</head>
<body>
  <div id="loadingScreen" class="loader"></div>

  <!-- Your page content goes here -->

  <script>
    // Show loading screen when the page starts loading
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("loadingScreen").classList.remove("hidden");
    });

    // Hide loading screen when the page has finished loading
    window.addEventListener("load", function() {
      document.getElementById("loadingScreen").classList.add("hidden");
    });
  </script>
</body>
</html>

