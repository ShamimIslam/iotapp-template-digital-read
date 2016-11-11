Intel® XDK IoT Digital Pin Read App
===================================
See [LICENSE.md](LICENSE.md) for license terms and conditions.

This sample application is distributed as part of the [Intel®
XDK](http://xdk.intel.com). It can also be downloaded or cloned directly from
its git repo on the [public Intel XDK GitHub\*
site](https://github.com/gomobile).

For help getting started developing applications
with the Intel XDK, please start with the
[Intel XDK documentation](https://software.intel.com/en-us/xdk/docs).

App Overview
------------
A simple Node.js application that reads an onboard digital input (a GPIO input),
on select Intel IoT development boards, and displays the result of that read on
the console log.

The app initializes a single pin to digital input mode, so it can be read;
samples that digital input at a regular basis; and prints the result of each
read to the console. The specific pin that is read is configured in
`cfg-app-platform.js` and can be identified by looking for lines similar to the
following line of code, in the `cfg.init` method:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    gpio = opt.altGpio ? gpio : 7 ;         // use alternate pin?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the example shown above, header "pin 7" will be used for the digital input.

**IMPORTANT:** the pin that is configured by the sample is a function of the
detected board. You **must** inspect the code to determine which pin is being
configured for use on your board!!

Once you have identified the GPIO pin that is being read, you can use a jumper
wire to change the input value of that digital input to a one or zero, by
connecting one end of the jumper wire to the initialized digital input and the
other end of the jumper to a +5V or GND point on your board's header.

Most boards have many pins that can be configured for use as a digital input.
The `cfg-app-platform.js` module has been designed so you can override the pin
that is used, by passing it an alternate pin during the init call (see the module
documentation). Or, you can simply modify the code to change the default value.

Important Sample App Files
--------------------------
* main.js
* package.json

Important Sample Project Files
------------------------------
* README.md
* LICENSE.md
* project-name.xdk
* project-name.xdke

Tested IoT Node.js Platforms
----------------------------
* [Intel® Galileo Board](http://intel.com/galileo)
* [Intel® Edison Development Platform](http://intel.com/edison)
* [Intel® Joule™ 570x Developer Kit](http://intel.com/joule)
