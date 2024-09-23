import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormType } from "@/schemas/FormSchema";
import { init, send } from "emailjs-com";

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors: formError, isValid, isSubmitting },
  } = useForm<FormType>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });
  const handleOnSubmit = (formData: FormType) => {
    console.log(formData);
    const { name, email, message } = formData;
    const apiKey = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_TEMPLATE_ID;
    console.log(apiKey, serviceId, templateId);
    if (!!apiKey && !!serviceId && !!templateId) {
      console.log("called");
      init(apiKey);
      const template_param = {
        form_name: name,
        from_email: email,
        message,
      };

      send(serviceId, templateId, template_param)
        .then(() => {
          reset();
          alert(
            `下記の内容で送信しました。\n\n名前:${name}\nemail:${email}\nmessage:${message}`
          );
        })
        .catch((err) => console.log("err: ", err));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="name">
          名前
        </label>
        <input
          {...register("name")}
          className={styles.textfield}
          type="text"
          id="name"
          name="name"
          placeholder="山田　太郎"
        />
        {formError.name && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formError.name.message}
          </div>
        )}
      </div>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">Email</div>
        <input
          type="text"
          {...register("email")}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="xxx@gmail.com"
        />
        {formError.email && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formError.email.message}
          </div>
        )}
      </label>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          お問い合わせ内容
        </label>
        <textarea
          {...register("message")}
          className={styles.textfield}
          id="message"
          name="message"
        ></textarea>

        {formError.message && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formError.message.message}
          </div>
        )}
      </div>

      {/* <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div> */}

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-white rounded px-4 py-2 disabled:bg-gray-300 md:self-center"
      >
        送信する
      </button>
    </form>
  );
}
