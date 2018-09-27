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

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
    'from'    => 'Excited User <mailgun@mg.marbletowninfo.org>',
    'to'      => 'Baz <jacob@jbsherman.com>',
    'subject' => 'Hello',
    'text'    => 'Testing some Mailgun awesomness!'
));
