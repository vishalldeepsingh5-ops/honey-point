import { useMutation, useQuery } from "@tanstack/react-query";
import type { MenuItem, OrderRequest, Reservation } from "../backend.d";
import { useActor } from "./useActor";

export function useAllMenuItems() {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMenuItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMenuByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenuByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMakeReservation() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (reservation: Reservation) => {
      if (!actor) throw new Error("Actor not ready");
      const id = crypto.randomUUID();
      await actor.makeReservation(id, reservation);
    },
  });
}

export function usePlaceOrder() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (order: OrderRequest) => {
      if (!actor) throw new Error("Actor not ready");
      const id = crypto.randomUUID();
      await actor.placeOrder(id, order);
    },
  });
}
