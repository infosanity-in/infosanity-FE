import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { InfoSanityService } from './../../../core/services/info-sanity.service';
import { getFormattedDateTime } from '../../../utils/helperFunctions';
import Constants from '../../../utils/constants';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  private subscriptions = new SubSink();
  posts: any = [];
  page: any = [];
  tags = [];
  CONTENT_CONSTANTS: any = Constants.CONTENT;

  constructor(private infoSanityService: InfoSanityService) { }

  ngOnInit(): void {
    this.subscriptions.sink = this.infoSanityService
      .getContent()
      .subscribe((data) => {
        const {
          contentData = [],
          pageNumber,
          // pageSize,
        } = data.responseObject;
        this.formatPosts(contentData);
        this.page = pageNumber;
      });

    this.subscriptions.sink = this.infoSanityService
      .getTags()
      .subscribe((data) => {
        const {
          tags = [],
          // pageNumber,
          // pageSize,
        } = data.responseObject;
        this.tags = tags;
        // this.page = pageNumber;
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  formatPosts(data) {
    this.posts = data.map(post => {
      post.creator = `Posted by ${post.acl.createdBy.name.split(' ')[0]}`;
      post.createdAt = `on ${getFormattedDateTime(post.createdAt)}`
      post.reviewer = this.getLatestReviewer(post);
      post.isValid = this.isPostValid(post.flag);
      post.iconClass = post.isValid ? 'validPostIcon' : 'invalidPostIcon';
      post.icon = post.isValid ? 'check_circle_outline' : 'block';
      post.iconTooltip = post.isValid ? 'Verified as True' : 'False Information';
      return post;
    })
  }

  getLatestReviewer(post) {
    const {
      reviews = {}, 
    } = post;
    if (!reviews || !reviews.isReviewed) {
      return '';
    }
    let totalReviewers = reviews.reviewers.length;
    return `Reviewed by ${reviews.reviewers[totalReviewers-1].name.split(' ')[0]}`;
  }

  isPostValid(flag) {
    return flag === this.CONTENT_CONSTANTS.FLAGS.VALID;
  }
}
