import { pool } from "$lib/db/mysql";


export async function GET({ request, params, url }) {

    let toRet;
    await pool.promise().query("SELECT id, created, label, article_type, short_desc, long_text FROM article WHERE id= ?", url.searchParams.get("id")).then(([rows, fields]) => rows.forEach(row => {
        toRet = row;
        return;
    }));
    
    return new Response(JSON.stringify(toRet));
}