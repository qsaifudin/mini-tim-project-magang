<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <b-table striped hover :items="items" :fields="fields" show-empty></b-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fields: ['id', 'name', 'alamat'],
            items: []
        }
    }
}
</script>