import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type SaldoType = {
  saldo: number | null;
  salvarSaldo: (valor: number) => Promise<void>;
};

export const SaldoContext = createContext<SaldoType>({
  saldo: null,
  salvarSaldo: async () => {},
});

export function SaldoProvider({ children }: { children: ReactNode }) {
  const [saldo, setSaldo] = useState<number | null>(100); // saldo pré-definido

  useEffect(() => {
    const carregarSaldo = async () => {
      const valor = await AsyncStorage.getItem("saldo");
      if (valor) {
        setSaldo(Number(valor)); // se já tiver valor salvo, usa ele
      } else {
        await AsyncStorage.setItem("saldo", String(100)); // se não tiver, salva o pré-definido
      }
    };
    carregarSaldo();
  }, []);

  const salvarSaldo = async (valor: number) => {
    setSaldo(valor);
    await AsyncStorage.setItem("saldo", String(valor));
  };

  return (
    <SaldoContext.Provider value={{ saldo, salvarSaldo }}>
      {children}
    </SaldoContext.Provider>
  );
}
