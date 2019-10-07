webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
var Events = [
    {
        'Date': '9 AUG 2018',
        'Category': 'Training Course',
        'Name': 'Jeet Ka Junoon',
        'Enddate': '10 AUG 2018',
        'Time': '6:00 PM',
        'Price': '1000',
        'Location': 'Indore',
        'Description': 'It is inded my pleasure to inform you about our upcoming  event Jeet Ka Junoon - Indore ,scheduled on  9th & 10th August 2018 evening 6-9  at Ravindra Natya Grah , Ravindranath Tagore Marg, Indore.This event is Unique and Inspiring workshop by Asia Greatest Leader 2017 Award winner        Mr.Bhupendra Singh Rathore (BSR), International Motivational Speaker,Transformational Business Coach,Leadership Expert & Author. Entry to this event is Free with compulsory registration,till date we have approx Registration link- http://coachbsr.com/events/jeet-ka-junoon-indore/For more information contact +91 8669234754 / 8669701263',
        'Organizer': 'Bhupendra Singh Rathore',
        'Featuredimg': 'https://s3.ap-south-1.amazonaws.com/townscript-production/images/f4a680e4-a988-4fc6-8ff2-1fcb197c81c7.jpeg',
        'Available': '1',
        'Spaces': '50',
        'BookedSpaces': '49',
    },
    {
        'Date': '5 OCT 2018',
        'Category': 'Agriculture',
        'Name': 'FarmTech Asia',
        'Enddate': '8 OCT 2018',
        'Time': '10:00 PM',
        'Price': '500',
        'Location': 'Indore',
        'Description': 'FarmTech Asia, an International Agriculture Exhibition and Conference is being organized during 05-08 October, 2018 at Agriculture College Ground, Indore, Madhya Pradesh. FarmTech Asia is being organized with an aim to provide the best platform for Agriculture Industry Stakeholders.',
        'Organizer': 'Farmtech Asia',
        'Featuredimg': 'https://s3.ap-south-1.amazonaws.com/townscript-production/images/42e92993-3772-4756-bd90-b529a2d55e0b.png',
        'Available': '0',
        'Spaces': '50',
        'BookedSpaces': '50',
    }
];


/***/ }),

/***/ "./src/app/add-events/add-events.component.css":
/***/ (function(module, exports) {

module.exports = ".booking{\r\n    padding-top: 25px;\r\n}\r\n.addEvent h3{\r\n    margin-top:100px;\r\n    margin-bottom: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-events/add-events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n  <h1 class=\"h2\"><i class=\"fas fa-plus-square\"></i> Add Events</h1>\n</div>\n\n<div class=\"container addEvent\">\n    <form>\n        <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"Name\">Title</label>\n                <input type=\"text\" required ngModel name=\"name\" #name=\"ngModel\" class=\"form-control\" id=\"email\">\n                <div class=\"alert alert-danger\" *ngIf=\"name.touched && !name.valid\">Name Required</div>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"Image\">Event Image</label>\n                <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\n              </div>\n              <div class=\"form-group col-md-12\">\n                  <label for=\"Discription\">Discription</label>\n                  <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"Category\">Category</label>\n                <select class=\"form-control\" >\n                    <option>Category 1</option>\n                    <option>Category 2</option>\n                    <option>Category 3</option>\n                  </select>\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"Organizer\">Tag</label>\n                <select class=\"form-control\" >\n                    <option>Tag 1</option>\n                    <option>Tag 2</option>\n                    <option>Tag 3</option>\n                  </select>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <label for=\"Organizer\">Organizer</label>\n                  <input type=\"text\" class=\"form-control\" id=\"pwd\">\n                </div>\n              \n              <div class=\"col-md-12\">\n                <h3>Where</h3>\n                <hr>\n              </div>              \n              <div class=\"form-group col-md-6\">\n                <label for=\"Address\">Location Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"pwd\">\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"Address\">Address</label>\n                <input type=\"text\" class=\"form-control\" id=\"pwd\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"City\">City</label>\n                <input type=\"text\" class=\"form-control\" id=\"pwd\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"Country\">Country</label>\n                <input type=\"text\" class=\"form-control\" id=\"pwd\">\n              </div>  \n              <div class=\"form-group col-md-3\">\n                <label for=\"City\">Postcode</label>\n                <input type=\"text\" class=\"form-control\" id=\"pwd\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"Country\">Region</label>\n                <input type=\"text\" class=\"form-control\" id=\"pwd\">\n              </div>  \n              \n              <div class=\"col-md-12\">\n                <h3>When</h3>\n                <hr>\n              </div>  \n\n              <div class=\"form-group col-md-4\">\n                <label for=\"Date\">From</label>\n                <input type=\"date\" class=\"form-control\" id=\"pwd\"><br>\n                <label for=\"End Date\">To</label>\n                <input type=\"date\" class=\"form-control\" id=\"pwd\">\n              </div>              \n              <div class=\"form-group col-md-4\">\n                <label for=\"Date\">Event Start at</label>\n                <input type=\"time\" class=\"form-control\" id=\"pwd\"><br>\n                <label for=\"End Date\">To</label>\n                <input type=\"time\" class=\"form-control\" id=\"pwd\">\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <label for=\"Date\">TimeZone</label>\n                  <select class=\"form-control\" >\n                    <option>UTC</option>\n                    <option>UTC +1</option>\n                    <option>UTC +6</option>\n                  </select>\n                  <br>\n                  <div class=\"form-check\">\n                      <div class=\"form-check-inline\">\n                        <label class=\"form-check-label\" for=\"check1\">\n                          <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"vehicle1\" value=\"something\" ><strong>All Day</strong>\n                        </label>\n                      </div>\n                      <p>This event spans every day between the beginning and end date, with start/end times applying to each day.</p>\n                  </div>                    \n              </div>\n              \n              <div class=\"col-md-12\">\n                  <h3>Booking/Registration</h3>\n                  <hr>\n              </div> \n              <div class=\"form-check-inline\">\n                <label class=\"form-check-label\" for=\"check1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"vehicle1\" value=\"something\" [(ngModel)]=\"ShowBooking\">Enable Registration For This Event\n                </label>\n              </div>                        \n        </div> \n\n        <!-- <div class=\"booking\" *ngIf=\"ShowBooking\"> -->\n        <div class=\"booking\" *ngIf=\"ShowBooking\">\n          <h4>Ticket</h4>\n          <hr>\n          <p>You can have single or multiple tickets, where certain tickets become available under certain conditions, e.g. early bookings, group discounts, maximum bookings per ticket, etc. Basic HTML is allowed in ticket labels and descriptions.</p>\n          \n          <table class=\"table\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Ticket Name</th>\n                  <th scope=\"col\">Price</th>\n                  <th scope=\"col\">Min/Max</th>\n                  <th scope=\"col\">Start/End</th>\n                  <th scope=\"col\">Available Spaces</th>\n                  <th scope=\"col\">Booked Spaces</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let ticket of tickets\">\n                  <td>{{ticket.name}}</td>\n                  <td>{{ticket.price | currency}}</td>\n                  <td>{{ticket.least}}/{{ticket.most}}</td>\n                  <td>{{ticket.from}} - {{ticket.until}}</td>\n                  <td>{{ticket.spaces}}</td>\n                  <td>{{ticket.booked}}</td>\n                </tr>                \n            </tbody>\n          </table>\n          <button class=\"btn btn-sm {{addnewticket ? 'btn-danger' : 'btn-success'}}\" (click)=\"addTicket()\">{{addnewticket ? 'Close' : 'Add New Ticket'}}</button>\n          <div style=\"margin-top:25px;\"></div>\n          <div class=\"newticket\" *ngIf=\"addnewticket\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                  <label for=\"Name\">Ticket Name</label>\n                  <input type=\"text\" class=\"form-control\" required>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"Name\">Price</label>\n                    <input type=\"text\" class=\"form-control\" required>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"Name\">Spaces</label>\n                    <input type=\"text\" class=\"form-control\" required>\n                  </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"Name\">At Least</label>\n                    <input type=\"text\" class=\"form-control\" required><br>\n                    <label for=\"Name\">At Most</label>\n                    <input type=\"text\" class=\"form-control\" required>\n                </div>               \n                <div class=\"form-group col-md-4\">\n                    <label for=\"Name\">Available From</label>\n                    <input type=\"text\" class=\"form-control\" required><br>\n                    <label for=\"Name\">Available Until</label>\n                    <input type=\"text\" class=\"form-control\" required>\n                </div>               \n                <div class=\"form-group col-md-4\">\n                    <label for=\"Name\">Available For</label>\n                    <select class=\"form-control\" >\n                        <option>Everyone</option>\n                        <option>Guest User</option>\n                        <option>Login User</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-12\">\n                    <label for=\"Discription\">Discription</label>\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                </div>\n              </div>    \n          </div>\n\n          <div style=\"margin-top:70px;\"></div>\n          <h4>Event Option</h4>\n          <hr> \n            <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">  \n                    <label for=\"Date\">Total Spaces</label>\n                    <input type=\"Number\" class=\"form-control\" id=\"pwd\">\n                </div>  \n            </div>                \n            <p><em><mark>Individual tickets with remaining spaces will not be available if total booking spaces reach this limit. Leave blank for no limit.</mark></em></p>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"Date\">Maximum Spaces Per Booking</label> \n                    <input type=\"Number\" class=\"form-control\" id=\"pwd\">\n                </div>  \n            </div>           \n            <p><em><mark>If set, the total number of spaces for a single booking to this event cannot exceed this amount.Leave blank for no limit.</mark></em></p>\n            \n           <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                  <label for=\"Date\">Booking Cut-Off Date</label> \n                  <input type=\"date\" class=\"form-control\" id=\"pwd\">\n              </div>  \n              <div class=\"form-group col-md-4\">\n                  <label for=\"Date\">Booking Cut-Off Date</label> \n                  <input type=\"time\" class=\"form-control\" id=\"pwd\">\n              </div>  \n           </div>           \n           <p><em><mark>This is the definite date after which bookings will be closed for this event, regardless of individual ticket settings above. Default value will be the event start date.</mark></em></p>\n        </div>   \n        \n        <div style=\"margin-top:30px;\"></div>\n        <button type=\"submit\" class=\"btn btn-primary\">Add Event</button>\n      </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-events/add-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddEventsComponent = /** @class */ (function () {
    function AddEventsComponent() {
        this.ShowBooking = false;
        this.addnewticket = false;
        this.tickets = [
            {
                "name": "Standard",
                "price": "500",
                "spaces": "10",
                "least": "15",
                "most": "1",
                "from": "31/08/18",
                "at": "09:00",
                "until": "10/09/18",
                "until at": "01:00",
                "booked": "0",
                "for": ["Everyone", "Guest User", "Log in User"]
            }
        ];
    }
    AddEventsComponent.prototype.ngOnInit = function () {
    };
    AddEventsComponent.prototype.addTicket = function () {
        this.addnewticket = !this.addnewticket;
    };
    AddEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-events',
            template: __webpack_require__("./src/app/add-events/add-events.component.html"),
            styles: [__webpack_require__("./src/app/add-events/add-events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddEventsComponent);
    return AddEventsComponent;
}());



/***/ }),

/***/ "./src/app/all-events/all-events.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-events/all-events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n  <h1 class=\"h2\">  <i class=\"fas fa-calendar-alt\"></i> All Events</h1>\n</div>\n\n<table class=\"table\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Category</th>\n      <th scope=\"col\">Location</th>\n      <th scope=\"col\">Date</th>\n      <th scope=\"col\">Price</th>\n      <th scope=\"col\"></th>\n      <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor =\"let Event of Allevents\">\n      <td>{{Event.Name}}</td>\n      <td>{{Event.Category}}</td>\n      <td>{{Event.Location}}</td>\n      <td>From {{Event.Date}} To {{Event.Enddate}}</td>\n      <td>{{Event.Price | currency}}</td>\n      <td><button class=\"btn btn-success btn-sm\" routerLink=\"/SingleEvent\" (click)=\"view(Event)\"><i class=\"far fa-eye\"></i></button></td>\n      <td><button class=\"btn btn-danger btn-sm\" (click)=\"delete()\"><i class=\"fas fa-trash\"></i></button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/all-events/all-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__("./src/app/Event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singleviewevent__ = __webpack_require__("./src/app/singleviewevent.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllEventsComponent = /** @class */ (function () {
    function AllEventsComponent() {
        this.Allevents = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* Events */];
        this.Event = __WEBPACK_IMPORTED_MODULE_2__singleviewevent__["a" /* SingleEvents */];
    }
    AllEventsComponent.prototype.ngOnInit = function () {
    };
    AllEventsComponent.prototype.view = function (Event) {
        this.Event = this.Event.splice(Event);
        this.Event = __WEBPACK_IMPORTED_MODULE_2__singleviewevent__["a" /* SingleEvents */];
        this.Event.push(Event);
    };
    AllEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all-events',
            template: __webpack_require__("./src/app/all-events/all-events.component.html"),
            styles: [__webpack_require__("./src/app/all-events/all-events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllEventsComponent);
    return AllEventsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"{{visit ? 'bg-dark' : 'col-md-2 d-none d-md-block bg-light sidebar'}}\" *ngIf=\"visit\"> -->\r\n    <div class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n      <app-sidebar-nav></app-sidebar-nav>\r\n    </div>\r\n    <!-- <main role=\"main\" class=\"{{visit ? 'col-md-9 ml-sm-auto col-lg-10 px-4' : 'col-md-12  col-lg-12'}}\"> -->\r\n      <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\r\n      <router-outlet></router-outlet>      \r\n    </main>\r\n  </div>\r\n</div> \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_nav_sidebar_nav_component__ = __webpack_require__("./src/app/sidebar-nav/sidebar-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_events_all_events_component__ = __webpack_require__("./src/app/all-events/all-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_events_add_events_component__ = __webpack_require__("./src/app/add-events/add-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setting_setting_component__ = __webpack_require__("./src/app/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__record_record_component__ = __webpack_require__("./src/app/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__event_dashboard_event_dashboard_component__ = __webpack_require__("./src/app/event-dashboard/event-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__event_event_component__ = __webpack_require__("./src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__booking_booking_component__ = __webpack_require__("./src/app/booking/booking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'AllEvents', component: __WEBPACK_IMPORTED_MODULE_7__all_events_all_events_component__["a" /* AllEventsComponent */] },
    { path: 'AddEvents', component: __WEBPACK_IMPORTED_MODULE_8__add_events_add_events_component__["a" /* AddEventsComponent */] },
    { path: 'Setting', component: __WEBPACK_IMPORTED_MODULE_9__setting_setting_component__["a" /* SettingComponent */] },
    { path: 'Records', component: __WEBPACK_IMPORTED_MODULE_10__record_record_component__["a" /* RecordComponent */] },
    { path: 'SignIn', component: __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'SingleEvent', component: __WEBPACK_IMPORTED_MODULE_15__event_event_component__["a" /* EventComponent */] },
    { path: 'Main', component: __WEBPACK_IMPORTED_MODULE_14__main_main_component__["a" /* MainComponent */] },
    { path: 'Booking', component: __WEBPACK_IMPORTED_MODULE_16__booking_booking_component__["a" /* BookingComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_nav_sidebar_nav_component__["a" /* SidebarNavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__all_events_all_events_component__["a" /* AllEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__add_events_add_events_component__["a" /* AddEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__record_record_component__["a" /* RecordComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_13__event_dashboard_event_dashboard_component__["a" /* EventDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_15__event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_16__booking_booking_component__["a" /* BookingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n  <h1 class=\"h2\"> <i class=\"fas fa-file\"></i> Booking</h1> \n</div>\n\n<table class=\"table\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor =\"let booking of bookings\">\n      <td>{{booking.Name | uppercase}} -Booked Spaces:   {{booking.BookedSpaces}} / <b>{{booking.Spaces}}</b>\n          <span class=\"{{booking.BookedSpaces == booking.Spaces ? 'text-danger text-uppercase' : ''}}\">{{booking.BookedSpaces == booking.Spaces ? 'No Space Available' : '' }}</span>\n      </td>\n      <td>{{booking.Date}} - {{booking.Enddate}}</td>\n    \n    </tr>\n  </tbody>\n</table>\n "

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__("./src/app/Event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
        this.bookings = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* Events */];
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-booking',
            template: __webpack_require__("./src/app/booking/booking.component.html"),
            styles: [__webpack_require__("./src/app/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n  <h1 class=\"h2\"> <i class=\"fas fa-tachometer-alt\"></i> Dashboard</h1>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/event-dashboard/event-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event-dashboard/event-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event-dashboard/event-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventDashboardComponent = /** @class */ (function () {
    function EventDashboardComponent() {
    }
    EventDashboardComponent.prototype.ngOnInit = function () {
    };
    EventDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-dashboard',
            template: __webpack_require__("./src/app/event-dashboard/event-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/event-dashboard/event-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventDashboardComponent);
    return EventDashboardComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let x of viewEvent\" class=\"container\" style=\"padding-top:100px;\">\n  <h1>{{x.Name}}</h1>\n  <img src=\"{{x.Featuredimg}}\" width=\"600px\"/>\n  <p><b>{{x.Category}}</b></p>\n  <p><b>Organizer :</b>{{x.Organizer}}</p>\n  <p><b>Overview </b><br>{{x.Description}}</p>\n  <p>From {{x.Date}} to {{x.Enddate}} at {{x.Time}} at {{x.Location}}</p>\n  <p><b>Price</b> {{x.Price | currency}}<br></p>\n  <button class=\"btn btn-danger\">Edit</button>\n</div>\n "

/***/ }),

/***/ "./src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__singleviewevent__ = __webpack_require__("./src/app/singleviewevent.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent() {
        this.viewEvent = __WEBPACK_IMPORTED_MODULE_1__singleviewevent__["a" /* SingleEvents */];
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("./src/app/event/event.component.html"),
            styles: [__webpack_require__("./src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Company name</a>\n  <!-- <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\"> -->\n  <span class=\"text-light\">{{today | date:'medium'}}</span>\n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <a class=\"nav-link\" href=\"#\" >Log out</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.today = Date.now();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor = \"let x of Allevents\" class=\"container\" style=\"padding-top:100px;\">\n  <h1>{{x.Name}}</h1>\n  <img src=\"{{x.Featuredimg}}\" width=\"600px\"/>\n  <p><b>{{x.Category}}</b></p>\n  <p><b>Organizer :</b>{{x.Organizer}}</p>\n  <p><b>Overview </b><br>{{x.Description}}</p>\n  <p>From {{x.Date}} to {{x.Enddate}} at {{x.Time}} at {{x.Location}}</p>\n  <p><b>Price</b> {{x.Price | currency}}<br><button class=\"{{x.Available > 0 ? 'btn btn-success' : 'btn btn-danger' }}\">{{x.Available > 0 ? 'Boook Now' : 'Sold Out'}}</button></p>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__("./src/app/Event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.Allevents = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* Events */];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/record/record.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n  <h1 class=\"h2\">  <i class=\"fas fa-book\"></i> Records</h1>\n</div>"

/***/ }),

/***/ "./src/app/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecordComponent = /** @class */ (function () {
    function RecordComponent() {
    }
    RecordComponent.prototype.ngOnInit = function () {
    };
    RecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-record',
            template: __webpack_require__("./src/app/record/record.component.html"),
            styles: [__webpack_require__("./src/app/record/record.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/app/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n  <h1 class=\"h2\">  <i class=\"fas fa-cog\"></i> Settings</h1>\n</div>"

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setting',
            template: __webpack_require__("./src/app/setting/setting.component.html"),
            styles: [__webpack_require__("./src/app/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/sidebar-nav/sidebar-nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar-nav/sidebar-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"sidebar-sticky\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\" routerLink=\"\">\n          <i class=\"fas fa-tachometer-alt\"></i>\n          Dashboard <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"AllEvents\">\n          <i class=\"fas fa-calendar-alt\"></i>\n          All Events\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"AddEvents\">\n          <i class=\"fas fa-plus-square\"></i>\n          Add Events\n        </a>\n      </li> \n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"Records\">\n          <i class=\"fas fa-book\"></i>\n          Records\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"Booking\">\n          <i class=\"fas fa-file-invoice\"></i>\n          Booking\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"Setting\">\n          <i class=\"fas fa-cog\"></i>\n          Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Main\" (click)=\"visitsite()\">\n          <i class=\"fas fa-home\"></i>\n          Visit Site\n        </a>\n      </li>      \n    </ul>\n  </div> \n</nav>"

/***/ }),

/***/ "./src/app/sidebar-nav/sidebar-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent() {
        this.visit = true;
    }
    SidebarNavComponent.prototype.ngOnInit = function () {
    };
    SidebarNavComponent.prototype.visitsite = function () {
        this.visit = false;
    };
    SidebarNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar-nav',
            template: __webpack_require__("./src/app/sidebar-nav/sidebar-nav.component.html"),
            styles: [__webpack_require__("./src/app/sidebar-nav/sidebar-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarNavComponent);
    return SidebarNavComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin text-center\">\n  <!-- <img class=\"mb-4\" src=\"../../assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\"> -->\n  <h1 class=\"h3 mb-3 font-weight-normal\">Log In</h1>\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n  <div class=\"checkbox mb-3\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n    </label>\n  </div>\n  <!-- <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"onLoginClick()\">Sign in</button>  -->\n  <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n</form> \n<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"onLoginClick()\">Sign in</button> \n\n\n\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(appRoutes) {
        this.appRoutes = appRoutes;
        this.isUserLoggedIn = false;
    }
    SignInComponent.prototype.onLoginClick = function () {
        this.appRoutes.navigate(['./Dashboard']);
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SignInComponent.prototype, "isUserLoggedIn", void 0);
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/singleviewevent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleEvents; });
var SingleEvents = [];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map