angular.module('sknPg.addPost', [])
    .controller('AddPostCtrl', function (AdminService) {
        var that = this;
        that.post = {};

        AdminService.getAllUsers((users) => {
            that.users = users;
        })

        this.submitPost = () => {
            console.log(that.post);
            AdminService.addPost(that.post, (post) => {
                that.post = {};
                alert('Post dodany');
            })
        }
    })