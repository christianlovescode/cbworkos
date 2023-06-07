import { NextResponse } from "next/server";
import { FetchUserData } from "types";

export async function GET() {
  try {
    const res = await fetch(
      "https://front-end-code-challenge.stephenbuilds.workers.dev/",
    );

    if (res.status === 200) {
      const data: FetchUserData = await res.json();

      const users = Object.keys(data.users).map((k: string) => ({
        ...data.users[k],
        admin: false,
        id: k,
      }));

      return NextResponse.json({ users }, { status: 200 });
    } else {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
