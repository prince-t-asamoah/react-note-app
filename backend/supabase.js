require('dotenv').config();
const { createClient} = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecret = process.env.SUPABASE_SECRET;

const db = createClient(supabaseUrl, supabaseSecret);

 module.exports = db;