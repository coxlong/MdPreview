<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: coxlong <coxlong@qq.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\MdPreview\Controller;

use OCA\MdPreview\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;
use OCP\Util;

class PageController extends Controller {
	private $initialState;
	public function __construct(
		IRequest $request,
		IInitialState $initialState) {
		parent::__construct(Application::APP_ID, $request);
		$this->initialState = $initialState;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function index(): TemplateResponse {
		Util::addScript(Application::APP_ID, 'mdpreview-main');

		return new TemplateResponse(Application::APP_ID, 'main');
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function preview(int $fileID): TemplateResponse {
		$this->initialState->provideInitialState('fileID', $fileID);

		Util::addScript(Application::APP_ID, 'mdpreview-file');

		return new TemplateResponse(Application::APP_ID, 'main');
	}
}
