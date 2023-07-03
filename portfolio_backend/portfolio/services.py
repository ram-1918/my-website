from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings


def send_email_verification(email, recruiter, msg):
    html_message = render_to_string('feedback.html', {"email": email.value}) if not recruiter else render_to_string('recruiter.html', {"email": email.value})
    html_message1 = render_to_string('feedback1.html', {"email": email.value, "msg": msg})
    subject = 'Thanks for your feedback!'
    message = 'Thank you for the feedback!'
    try: 
        send_mail(
            subject, 
            message, 
            from_email=settings.EMAIL_HOST_USER, 
            recipient_list=[email.value], 
            html_message=html_message, 
            fail_silently=False
        )
        # print("succuss em")
        send_mail(
            subject, 
            message, 
            from_email=settings.EMAIL_HOST_USER, 
            recipient_list=['rcb.26498@gmail.com'], 
            html_message=html_message1, 
            fail_silently=False
        )
        # print('Email sent successfully!')
    except Exception as e:
        print(f'Error sending email: {str(e)}')
