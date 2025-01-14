from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings


def send_email_verification(email, recruiter, msg, sender='rcb.26498@gmail.com'):
    phone = '+17166171918' if sender == 'rcb.26498@gmail.com' else '+17168089656'
    html_message = render_to_string('feedback.html', {"email": email.value, "sender":sender, "senderPH":phone}) if not recruiter else render_to_string('recruiter.html', {"email": email.value, "sender":sender})
    html_message1 = render_to_string('feedback1.html', {"email": email.value, "msg": msg})
    subject = 'Thanks for your feedback!'
    message = 'Thank you for the feedback!'
    try: 
        send_mail(
            subject, 
            message, 
            from_email=settings.EMAIL_HOST_USER if sender == 'rcb.26498@gmail.com' else 'preethamk.967@gmail.com', 
            recipient_list=[email.value], 
            html_message=html_message, 
            fail_silently=False
        )
        # print("succuss em")
        send_mail(
            subject, 
            message, 
            from_email=settings.EMAIL_HOST_USER if sender == 'rcb.26498@gmail.com' else 'preethamk.967@gmail.com', 
            recipient_list= [sender], # ['rcb.26498@gmail.com'], 
            html_message=html_message1, 
            fail_silently=False
        )
        # print('Email sent successfully!')
    except Exception as e:
        print(f'Error sending email: {str(e)}')
