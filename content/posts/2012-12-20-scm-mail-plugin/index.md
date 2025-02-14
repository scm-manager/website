---
title: scm-mail-plugin
date: 2012-12-20T08:15:01+00:00
author: Sebastian Sdorra
categories:
  - plugins
  - library-plugins

---
The [scm-mail-plugin](https://github.com/scm-manager/scm-mail-plugin) provides an central api for sending e-mails. This plugin is primarily for use by other plugins.

**Wiki:** <a href="https://bitbucket.org/sdorra/scm-manager/wiki/mail-plugin" target="_blank" rel="noopener noreferrer">https://bitbucket.org/sdorra/scm-manager/wiki/mail-plugin </a>

**Example:**
```java
/**
 *
 * @author Sebastian Sdorra
 */
public class NotificationService
{
  private static final Logger logger = LoggerFactory.getLogger(
    NotificationService.class);
  
  private MailService mailService;

  @Inject
  public NotificationService(MailService mailService)
  {
    this.mailService = mailService;
  }
  
  public void sendNotification() throws MailSendBatchException {
    if ( mailService.isConfigured() ){
      Email mail = new Email();
      mail.setFromAddress("SCM-Administrator", "admin@scm-manager.org");
      mail.addRecipient("Test User", "test.user@scm-manager.org", RecipientType.TO);
      mail.setSubject("SCM-Manager notification");
      mail.setText("Notification from SCM-Manager");
      
      mailService.send(mail);
    } else {
      logger.warn("mail service is not configured");
    }
  }
}
```
