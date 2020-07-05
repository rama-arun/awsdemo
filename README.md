## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Access](#access)

## General info
This project is simple AWS CloudFormation Sample Template demonstrating the following 
  AutoScalingMultiAZWithNotifications:
  Create a multi-az, 
  load balanced and Auto Scaled sample web site running on an Apache Web Serever 
  
  The application is configured to span all Availability Zones in the
  region and is Auto-Scaled based on the CPU utilization of the web servers. 
  
  Notifications will be sent to the operator email address on scaling events. The instances are
  load balanced with a simple health check against the default web page.
  
  AWS S3 Bucket is used as storage, content is used to display an Architecture Image of this implementation.
	
## Technologies
Project is created with:
* Modulized Templating with CloudFormation
	
## Access
You can access the created Stack in the following URL

[Rama AWS Interview Demo](http://demo.rama-arun.info)
