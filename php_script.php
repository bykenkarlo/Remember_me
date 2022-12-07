  // Sending data to a webhook
  $url = 'domain.com/api/';
  $handle = curl_init($url);
    $data = array(
          'key' => 'qwertyuiop1234567890'
    );
  $encodedData = json_encode($data);
  curl_setopt($handle, CURLOPT_POST, 1);
  curl_setopt($handle, CURLOPT_POSTFIELDS, $encodedData);
  curl_setopt($handle, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  $result = curl_exec($handle);

  // receiving data
  $data = file_get_contents("php://input");
  $event_response = json_decode($data, true); // no data
