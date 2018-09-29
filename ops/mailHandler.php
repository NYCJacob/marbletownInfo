<?php /** @noinspection PhpDeprecationInspection */
/**
 * Created by PhpStorm.
 * Date: 25/09/18
 * Time: 7:52 PM
 */


# Include the Autoloader
require '../vendor/autoload.php';
#include api key file
require '../config/config.php';

use Mailgun\Mailgun;


# Instantiate the client.
$mgClient = new Mailgun($mgApiKey);
$domain = "mg.marbletowninfo.org";


$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$street = $_POST['street'];
$city = $_POST['city'];
$zipcode = $_POST['zipcode'];
$email = $_POST['e_mail'];
$adult = $_POST['adult_confirm'];
$acknowledge = $_POST['acknowledgment'];

$messageText = "$first_name $last_name is over 18 [code $adult ] and signed by acknowledgement [code $acknowledge ] \n
address: $street, $city  $zipcode \n
email: $email";

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
    'from'    => 'Excited User <mailgun@mg.marbletowninfo.org>',
    'to'      => 'MarbletownInfo <jacob@jbsherman.com>',
    'subject' => 'Petition signature',
    'text'    => $messageText
));
