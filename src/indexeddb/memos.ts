import Dexie from "dexie";

export interface MemoRecord {
  datetime: string;
  title: string;
  text: string;
}

const database = new Dexie("markdown-editor");
database.version(1).stores({ memos: "&datetime" });
const memos: Dexie.Table<MemoRecord, string> = database.table("memos");

export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString();
  await memos.put({ datetime, title, text });
};

export const getMemos = (): Promise<MemoRecord[]> => {
    //orderByでdatetime(保存した日時)を昇降で取得。reverseで逆並びにする。
    //toArrayで配列で返す。
  return memos.orderBy("datetime").reverse().toArray();
};
