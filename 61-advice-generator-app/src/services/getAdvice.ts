type Advice = {
  id: number;
  advice: string;
};

export default async function getAdvice(): Promise<Advice> {
  const url = "https://api.adviceslip.com/advice";

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok)
      throw new Error(`Bir Hata oluştu! HTTP Error: ${response.status}`);

    const data = await response.json();
    return data.slip;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
