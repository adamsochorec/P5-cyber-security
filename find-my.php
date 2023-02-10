<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Find My</title>
    <?php
    $IPATH = $_SERVER['DOCUMENT_ROOT'] . '/assets/php/';
    include $IPATH . 'global-head.php';
    ?>
    <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" />
  </head>
  <body id="find-my">
    <!-- HEADER START -->
    <?php
     $IPATH = $_SERVER['DOCUMENT_ROOT'] . '/assets/php/';
     include $IPATH . 'global-nav-bar.php';
     ?>
    <!-- HEADER END -->
    <main>
      <article class="wrapper-narrow flex-center">
        <dotlottie-player
          src="/img/lottie/track.lottie"
          background="transparent"
          speed="1"
          autoplay
          loop
        ></dotlottie-player>
        <h1>Adam's Find My</h1>
        <br />
        <h2>
          It looks like you have found my
          <?php
          // Get the value of the "id" query parameter from the URL
          $type = $_GET["id"];
          echo $type;
          ?>, please <a href="/homepage#contact">write to me</a> or give me a
          call at <a href="tel:50104776p45">+4550104776</a>! <br /><br />
          Thanks!
        </h2>
        <!-- logs - url: https://adamsochorec.com/find-my?id=xxx -->
        <?php
        $logFile = 'logs.txt';
        $id = $_GET['id'];
        $time = date('Y-m-d H:i:s');
    
        // Get the user's geolocation
        $location = "";
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $location = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $location = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $location = $_SERVER['REMOTE_ADDR'];
        }

        // Append the log to the logs.php file
        $log = "QR code '$id' was scanned at $time from I.P. $location.\n";
        file_put_contents($logFile, $log, FILE_APPEND);
    ?>
        <hr />
      </article>
    </main>
    <script
      src="https://unpkg.com/@dotlottie/player-component@1.0.0/dist/dotlottie-player.js"
      defer
    ></script>
    <!-- FOOTER START -->
    <?php
    $IPATH = $_SERVER['DOCUMENT_ROOT'] . '/assets/php/';
    include $IPATH . 'global-footer.php';
    ?>
    <!-- FOOTER END -->
  </body>
</html>