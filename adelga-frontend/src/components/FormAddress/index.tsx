"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./form-address.module.css";
import { useCartStore } from "@/store/cart";
import correios from "@/services/correios";
import { MapPinLine, Smiley } from "@phosphor-icons/react/dist/ssr";

const schema = z.object({
  cep: z
    .string()
    .min(8, { message: "CEP inválido." })
    .max(9, { message: "CEP inválido." }),
  address: z.string().trim().min(3, { message: "Preencha o endereço." }),
  number: z.number({
    required_error: "Preencha o número.",
    invalid_type_error: "O número é inválido.",
  }),
  complement: z.optional(z.string()),
  district: z.string().trim().min(1, { message: "Preencha o bairro." }),
  city: z.string().trim().min(1, { message: "Preencha a cidade." }),
  uf: z.string().trim().min(2, { message: "Preencha a UF." }),
  name: z
    .string()
    .trim()
    .min(2, { message: "Preencha o nome da pessoa que receberá." }),
});

export type FormAddressProps = z.infer<typeof schema>;

export function FormAddress() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    resetField,
  } = useForm<FormAddressProps>({ resolver: zodResolver(schema) });

  const { addShippingAddress } = useCartStore();

  const onSubmit = (data: FormAddressProps) => {
    addShippingAddress(data);
  };

  const loadAddressByCep = async (cep: string) => {
    resetField("number");
    resetField("complement");
    const { data } = await correios.get("/correios-consulta-cep", {
      params: {
        cep,
      },
    });

    setValue("cep", data.address.cep);
    setValue("address", data.address.logradouro);
    setValue("city", data.address.localidade);
    setValue("district", data.address.bairro);
    setValue("uf", data.address.uf);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.title}>
        <MapPinLine size={20} color="" />
        <label>Endereço de entrega</label>
      </div>
      <div className={styles.box40}>
        <input
          type="text"
          placeholder="CEP"
          {...register("cep")}
          onBlur={(e) => loadAddressByCep(e.target.value)}
        />
        {errors.cep && (
          <p className={styles.messageError}>{errors.cep.message}</p>
        )}
      </div>
      <div className={styles.box100}>
        <input type="text" placeholder="Endereço" {...register("address")} />
        {errors.address && (
          <p className={styles.messageError}>{errors.address.message}</p>
        )}
      </div>
      <div className={styles.box40}>
        <input
          type="number"
          placeholder="Número"
          {...register("number", { valueAsNumber: true })}
        />
        {errors.number && (
          <p className={styles.messageError}>{errors.number.message}</p>
        )}
      </div>
      <div className={styles.box60}>
        <input
          type="text"
          placeholder="Complemento"
          {...register("complement")}
        />
        {errors.complement && (
          <p className={styles.messageError}>{errors.complement.message}</p>
        )}
      </div>
      <div className={styles.box40}>
        <input type="text" placeholder="Bairro" {...register("district")} />
        {errors.district && (
          <p className={styles.messageError}>{errors.district.message}</p>
        )}
      </div>
      <div className={styles.box50}>
        <input type="text" placeholder="Cidade" {...register("city")} />
        {errors.city && (
          <p className={styles.messageError}>{errors.city.message}</p>
        )}
      </div>
      <div className={styles.box10}>
        <input
          type="text"
          placeholder="UF"
          {...register("uf")}
          minLength={2}
          maxLength={2}
        />
        {errors.uf && (
          <p className={styles.messageError}>{errors.uf.message}</p>
        )}
      </div>
      <div className={styles.title}>
        <Smiley size={20} color="" />
        <label>Quem receberá?</label>
      </div>
      <div className={styles.box100}>
        <input type="text" placeholder="Nome" {...register("name")} />
        {errors.name && (
          <p className={styles.messageError}>{errors.name.message}</p>
        )}
      </div>
      <button className={styles.button}>Confirmar endereço</button>
    </form>
  );
}
