var url = 'https://www.okcupid.com/login', 
    username = ' ',      //don't forget to enter your own credentials ya dummy! 
    password = ' ',
    x = require('casper').selectXPath;

casper.test.comment('we bout to rate EVERYONE');

casper.start(url, function () {
    this.test.info('logging in to okstupid');
    this.fill('#login_form', {
        'username': username,
        'password' : password
    }, true);
    this.wait(1000); // sometimes casper craps out here, so adding a wait to be safe  
  });
  
    casper.thenClick('#nav_ratings a', function () {
        this.test.info('q u i c k m a t c h');
    });

// this is embarassing and i hate it
// script runs really slow right now and seems to fail silently around 50-100 (i know)
// until i can optimize and figure out OKC's threshold, gonna leave at 25
    
    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });


    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });


    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });


    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });

    casper.then(function() {
        this.click(x('//*[@id="stars"]/li[5]'));
        this.wait(1000); //   
    });

          casper.then(function() {
              var url = this.evaluate(function() {
                  return __utils__.getElementByXPath("//a[contains(@href,'?cf=quickmatch')]").href;
              });
              this.echo('you just rated ' + url, 'INFO');
              this.open(url);
              this.echo('...visiting her profile'); 
          });
          
          casper.thenOpen('http://www.okcupid.com/quickmatch', function() {
          });


casper.run(function() {
    this.exit();
});

