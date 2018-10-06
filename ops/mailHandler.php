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


$first_name = htmlentities(trim($_POST['first_name'], ENT_QUOTES, "UTF-8"));
$last_name = htmlentities(trim($_POST['last_name']),ENT_QUOTES, "UTF-8");
$street = htmlentities(trim($_POST['street']),ENT_QUOTES, "UTF-8");
$city =htmlentities(trim($_POST['city']),ENT_QUOTES, "UTF-8");
$zipcode = htmlentities(trim($_POST['zipcode']),ENT_QUOTES, "UTF-8");
$email = htmlentities(trim($_POST['e_mail']),ENT_QUOTES, "UTF-8");
$adult = htmlentities($_POST['adult_confirm'],ENT_QUOTES, "UTF-8");
$acknowledge = htmlentities($_POST['acknowledgment'],ENT_QUOTES, "UTF-8");

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
