import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MeuContexto = createContext({
  saldo: "",
  setSaldo: (_: string) => {}
});

type MeuProviderProps = {
  children: ReactNode;
};

export function MeuProvider({ children }: MeuProviderProps) {
  const [saldo, setSaldo] = useState<string>("");

  // Carregar saldo ao iniciar
  useEffect(() => {
    const carregarSaldo = async () => {
      const valor = await AsyncStorage.getItem("saldo");
      if (valor) setSaldo(JSON.parse(valor));
    };
    carregarSaldo();
  }, []);

  // Salvar saldo sempre que mudar
  useEffect(() => {
    const salvar = async () => {
      await AsyncStorage.setItem("saldo", JSON.stringify(saldo));
    };
    salvar();
  }, [saldo]);

  return (
    <MeuContexto.Provider value={{ saldo, setSaldo }}>
      {children}
    </MeuContexto.Provider>
  );
}
