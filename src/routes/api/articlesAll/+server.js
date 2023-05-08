import { pool } from "$lib/db/mysql";


export async function GET() {

    let toRet = [];
    var q = "SELECT id, created, label, article_type, short_desc FROM article ORDER BY created DESC";
    await pool.promise().query(q).then(([rows, fields]) => rows.forEach(row => {
        toRet.push(row);
    }));
    
    return new Response(JSON.stringify(toRet));
}