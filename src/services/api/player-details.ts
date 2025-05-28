import { PlayerShotsOnTargetResponse } from "@/services/api/constant/type";

export async function fetchPlayerDetails(): Promise<PlayerShotsOnTargetResponse> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}?marketType=player_shots_on_target&size=30&page=1`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: PlayerShotsOnTargetResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching player shots on target data:", error);
    throw error;
  }
}
